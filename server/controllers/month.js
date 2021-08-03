import express from 'express';
import mongoose from 'mongoose';

import Month from '../models/month.js';

export const auth = async (req, res) => {
    
    try {
        
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getAmount = async (req, res) => {
    const { id } = req.params;

    try {
        const amount = await Month.findById(id);

        res.status(200).json(amount.monthBudget);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const createAmount = async (req, res) => {

    try {
        
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const updateAmount = async (req, res) => {

    try {
        
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getDetails = async (req, res) => {
    
    try {
        
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getSection = async (req, res) => {
    
    try {
        
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const createMonth = async (req, res) => {
    const date = req.body;

    console.log("Test change");

    const newDate = new Month({ ...date });

    try {
        await newDate.save();

        res.status(201).json(newDate);    
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}