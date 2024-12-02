import Express from 'express';
const Router = Express.Router();
Router.get('/test', (req, res) => {res.send("API is running!")});
export default Router; 
  