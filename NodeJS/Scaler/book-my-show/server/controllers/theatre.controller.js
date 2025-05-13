const theatreModel = require('../models/theatre.model');

const GetAllTheatres = async (req, res) => {

    try {
        console.log('Fetching all theatres...');
        const theatres = await theatreModel.aggregate([
            {
                $lookup: {
                    from: 'users',            // collection name (lowercase and plural usually)
                    localField: 'owner',
                    foreignField: '_id',
                    as: 'ownerDetails'
                }
            },
            {
                $unwind: '$ownerDetails'   // Flatten the array if you want a single object
            }
        ]);
        console.log('Fetched theatres:', theatres);
        res.status(200).json({ success: true, theatres });
    } catch (error) {
        console.error('Error in GetAllTheatres:', error);
        res.status(500).json({ success: false, message: 'Error fetching theatres', error });
    }
}

const GetTheatreByOwner = async (req, res) => {

    try {

        const ownerId = req.body.ownerId;
        const theatres = await theatreModel.find({ owner: ownerId });
        if (!theatres) {
            return res.status(404).json({ success: false, message: 'No theatres found for this owner' });
        }

        res.status(200).json({ success: true, theatres });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching theatres', error: err });
    }
}

const AddTheatre = async (req, res) => {
    try {
        const theatre = new theatreModel(req.body);
        await theatre.save();
        res.status(201).json({ success: true, message: 'Theatre added successfully', theatre });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding theatre', error });
    }
}

const UpdateTheatre = async (req, res) => {

    try {

        const body = req.body;
        const theatreId = body.id;
        const theatre = await theatreModel.findById(theatreId);

        Object.keys(body).forEach((key) => {
            if (key !== 'id') {
                theatre[key] = body[key];
            }
        });

        await theatre.save();
        res.status(200).json({ success: true, message: 'Theatre updated successfully', theatre });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error updating theatre', error: err });
    }
}

const DeleteTheatre = async (req, res) => {
    try {

        const theatreId = req.body.id;
        const theatre = await theatreModel.findByIdAndDelete(theatreId);

        if (!theatre) {
            return res.status(404).json({ success: false, message: 'Theatre not found' });
        }

        res.status(200).json({ success: true, message: 'Theatre deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error deleting theatre', error: err });
    }
}

module.exports = {
    GetAllTheatres,
    GetTheatreByOwner,
    AddTheatre,
    UpdateTheatre,
    DeleteTheatre
}