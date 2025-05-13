const showModel = require('../models/show.model');

const GetAllShowByTheatre = async (req, res) => {
    try {

        const shows = await showModel.aggregate([
            {
                $lookup: {
                    from: 'theatres',
                    localField: 'theatre',
                    foreignField: '_id',
                    as: 'theatreDetails'
                }
            },
            {
                $unwind: '$theatreDetails'
            }
        ]);
        res.status(200).json({
            success: true,
            message: "All shows have been fetched for theatre",
            data: shows
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const GetShowById = async (req, res) => {
    try {
        const showId = req.body.showId;

        const result = await showModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(showId) } },
            {
                $lookup: {
                    from: 'movies',
                    localField: 'movie',
                    foreignField: '_id',
                    as: 'movie'
                }
            },
            {
                $lookup: {
                    from: 'theatres',
                    localField: 'theatre',
                    foreignField: '_id',
                    as: 'theatre'
                }
            },
            { $unwind: '$movie' },
            { $unwind: '$theatre' }
        ]);

        if (result.length === 0) {
            return res.status(404).json({ success: false, message: 'Show not found' });
        }

        res.status(200).json({
            success: true,
            message: "Fetched show successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};


const AddShow = async (req, res) => {
    try {

        const newShow = await showModel(req.body);
        await newShow.save();
        res.status(200).json({
            success: true,
            message: "Show added successfully",
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const UpdateShow = async (req, res) => {
    try {

        const body = req.body;
        const showId = body.showId;
        const show = await showModel.findById(showId);

        Object.keys(body).forEach(key => {
            if (key !== 'id')
                show[key] = body[key];
        })
        await show.save();

        res.status(200).json({
            success: true,
            message: "Show has been updated"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const DeleteShow = async (req, res) => {
    try {

        await showModel.findByIdAndDelete(req.body.showId);
        res.status(200).json({
            success: true,
            message: "Show deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    GetAllShowByTheatre,
    GetShowById,
    AddShow,
    UpdateShow,
    DeleteShow
}