import { Document, Schema, model } from 'mongoose'
import { User } from './user.interface'

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

export const UserModel = model<User & Document>('User', userSchema)
