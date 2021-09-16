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
    const userEmail  = req.body.userEmail;

    try {
        const months = await Month.find({ "createdBy": userEmail });

        res.json({ data: months });    
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }

}

export const updateMonth = async (req, res) => {
    // retrieve amount from req
    const month = req.body;
    const id = req.body._id;

    const options = {returnOriginal: false}

    try {
        const changedMonth = await Month.findByIdAndUpdate(id, month, options);

        res.json(changedMonth);
    } catch (error) {
        console.log("try error");
        res.status(404).json({ message: error.message });
    }
}