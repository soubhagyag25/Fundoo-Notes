import express, { IRouter } from 'express';
import UserController from '../controllers/user.controller';
import { userAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new UserController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {
    // Route to check if the API is working (No auth required)
    this.router.get('/create', (req, res) => {
      res.status(200).json({
        code: 200,
        message: 'API is correctly working and ready to post'
      });
    });

    // Route to get all users (No auth required)
    this.router.get('', this.UserController.getAllUsers);

    // Route to create a new user (Auth required)
    this.router.post('/create',this.UserController.newUser);

    // Route to get a single user by their ID (No auth required)
    this.router.get('/:id', this.UserController.getUser);

    // Route to update a user by their ID (Auth required)
    this.router.put('/:id',this.UserController.updateUser);

    // Route to delete a user by their ID (Auth required)
    this.router.delete('/:id',this.UserController.deleteUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
