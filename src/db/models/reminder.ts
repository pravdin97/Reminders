import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ReminderSchema = new Schema({
  title: { type: String, required: true },
  endDate: { type: Number },
  duration: { type: Number },
});

const Reminder = model('reminder', ReminderSchema);

export default Reminder;

// types
export type IReminder = typeof Reminder;