import express from 'express';
import mongoose from 'mongoose';

import Month from '../models/month.js';

export const createMonth = async (req, res) => {
    const date = req.body;

    const newDate = new Month({ ...date });

    try {
        await newDate.save();

        res.status(201).json(newDate);    
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getMonths = async (req, res) => {
    const { userEmail } = req.body;

    try {
        const months = await Month.find();

        res.json({ data: months });    
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }

}