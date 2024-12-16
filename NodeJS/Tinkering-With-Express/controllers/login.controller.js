const login = async (req,res)=>{

    const id = req.params.id;
    res.status(200).json({message:`Id is: ${id}`});
}

const test = async(req,res)=>{

    const val = req.params.val;
    res.status(200).json({message:`Val is: ${val}`});
}

module.exports = {login,test};