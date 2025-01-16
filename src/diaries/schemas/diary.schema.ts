import { Schema, Document } from 'mongoose';

export const DiarySchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        content: { type: String, required: true },
        imageUrl: { type: String },
    },
    { timestamps: true }
);

export interface Diary extends Document
{
    title: string;
    description: string;
    content: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}