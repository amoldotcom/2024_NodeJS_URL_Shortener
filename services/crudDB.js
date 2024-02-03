const urlModel = require("../models/urlModel.js");

const getAllDoc = async () => {
	return await urlModel.find();
};

const deleteDocByID = async (id) => {
	return await urlModel.findByIdAndDelete(id);
};

const createDoc = async (dataObj) => {
	const countDoc = await urlModel.find({ longURL: dataObj.longURL }).count();
	if (countDoc > 0) {
		return "Already Present in the DB!!!";
	}
	const urlDoc = new urlModel(dataObj);
	const result = await urlDoc.save();
	return result;
};

const getLongURL = async (url) => {
	const urlDoc = await urlModel.findOneAndUpdate({ shortURL: url }, { $inc: { clicksCount: 1 } });
	if (urlDoc == null) {
		return "";
	}
	// urlDoc.clicksCount++;
	// urlDoc.save();
	return urlDoc.longURL;
};

module.exports = { getAllDoc, deleteDocByID, createDoc, getLongURL };
