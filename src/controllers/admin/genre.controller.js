const { StatusCodes } = require("http-status-codes");
const GenreService = require("../../services/admin/genre.service");
const Genre = require("../../services/admin/genre.service");

class GenreController {
  static async index(req, res, next) {
    try {
      const genres = await Genre.index();
      res.json({ status: true, data: genres });
    } catch (error) {
      next(error);
    }
  }

  static async show(req, res, next) {
    try {
      const genre = await GenreService.show(req.params.id);
      res.status(StatusCodes.OK).json({ status: true, data: genre });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    const data = req.body;
    try {
      const genre = await Genre.create(data);
      res.status(StatusCodes.CREATED).json({ data: genre });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const data = req.body;
    const id = req.params.id;
    try {
      const genre = await Genre.update({ id, data });
      res.status(StatusCodes.OK).json({ status: true, data: genre });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await Genre.delete(req.params.id);
      res
        .status(StatusCodes.OK)
        .json({ status: true, message: "Genre deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GenreController;
