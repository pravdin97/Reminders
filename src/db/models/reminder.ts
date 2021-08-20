import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Reminder = new Schema({
  title: { type: String, required: true },
  endDate: { type: Number },
  duration: { type: Number },
});

export default model('reminder', Reminder);
