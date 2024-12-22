import jwt from "jsonwebtoken";
const GenerateJWT = (id) => {
    return jwt.sign({ id }, radiohead, {
        expiresIn: "30d",
    });
    }
export default GenerateJWT;