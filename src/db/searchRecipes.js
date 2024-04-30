import { db } from './db';

export const searchRecipes = async (searchString) => {
    const connection = await db.getConnection();
    const meals = await connection.collection('recipes')
        .find({ $text: { $search: 'chicken' } })
        .toArray();
    return meals;
}