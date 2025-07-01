import User from "../models/User.js";

export async function getUsers(req,res) {
    try {
        const users = await User.find().sort({createdAt:-1}); //-1 desc | 1 asc
        res.status(200).json(users);
    } catch (error) {
        console.error("Error in users controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}
export async function createUser(req,res) {
    try {
        const { username, email, password } = req.body
        const newUser = new User ({username, email, password})

        // await newUser.save()
        // res.status(201).json({message:"user created!"})
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({message:"Internal server error"})        
    }
}

export async function loginUser(req, res) {
  const { identifier, password } = req.body;

  // Example pseudo-auth logic:
  const user = await User.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
}
