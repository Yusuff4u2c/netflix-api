const Genre = require("../../models/Genre");
const Exception = require("../../exceptions/Exception");
const { StatusCodes } = require("http-status-codes");

class GenreService {
  static async index() {
    const genres = await Genre.find({});
    if (!genres) {
      throw new Error("Genres not found");
    }
    return genres;
  }
  static async show(id) {
    const genre = await Genre.findById({ _id: id });
    if (!genre) {
      throw new Error("Genre not found");
    }
    return genre;
  }
  static async create(data) {
    const genre = await Genre.findOne({ name: data.name });
    if (genre) {
      throw new Exception("Genre already exists", StatusCodes.BAD_REQUEST);
    }
    const newGenre = new Genre(data);
    await newGenre.save();
    return newGenre;
  }

  static async update({ id, data }) {
    const genre = await Genre.findOne({ _id: id });
    if (!genre) {
      throw new Error("Genre not found");
    }
    Object.assign(genre, data);
    await genre.save();
    return genre;
  }
  static async delete(id) {
    const genre = await Genre.findById({ _id: id });
    if (!genre) {
      throw new Error("Genre not found");
    }
    await Genre.deleteOne({ _id: id });
  }
}
module.exports = GenreService;
