const express = require("express");

const bodyParser = require("body-parser");

const app = express();
var mongoose = require("mongoose");
const Schema = mongoose.Schema;
app.use(bodyParser.urlencoded({extended: false}));

var EventSchema = new Schema({
    event_id: {type: Number, unique: true},
    //event description
    event_desc: {type: String},
    event_summary: {type: String},
    event_location: {type: String},
    //event organizer
    event_org: {type: String},
    event_date: {type: String}
});

var UserSchema = new Schema({
    user_id: {type: Number, unique: true},
    username: {type: String, unique: true},
    password: {type: String}
});

var Favourite_eventSchema = new Schema({
    user_id: {type: Number},
    event_id: {type: Number}
});

var CommentSchema = new Schema({
    comment_id: {type:String, unique: true, uuid: true},
    event_id: {type: Number},
    user_id: {type: Number},
    comment_content: {type:String}
});


exports.Event = mongoose.model("Event", EventSchema);
exports.User = mongoose.model("User", UserSchema);
exports.Favourite_event =mongoose.model("Favourite event", Favourite_eventSchema);
exports.Comment = mongoose.model("Comment", CommentSchema);

