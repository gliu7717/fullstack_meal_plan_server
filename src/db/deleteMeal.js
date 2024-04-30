import { db } from './db';
var ObjectID = require('mongodb').ObjectId

export const deleteMeal = async (mealId) => {
    const connection = db.getConnection();
    console.log(mealId)
    await connection.collection('meals').deleteOne({ _id:  new ObjectID(mealId) });
}