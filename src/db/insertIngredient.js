import { db } from './db';

export const insertIngredient = async (ingredient) => {
    const connection = db.getConnection();
    console.log(ingredient)
    await connection.collection('ingredients').insertOne(ingredient);
}