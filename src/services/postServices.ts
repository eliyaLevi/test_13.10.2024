import  Post, {IPost} from "../models/postModel";


export const createPost = async (postData: Partial<IPost>): Promise<IPost> => {
    const post = new Post(postData);
    return await post.save();
  };

// // לקבל משתמש לפי ID
// export const getUserById = async (id: string): Promise<IUser | null> => {
//   return await User.findById(id).select("-password").populate("posts");
// };

// export const getAllUsers = async (): Promise<IUser[]> => {
//   return await User.find().select("-password");
// };

// export const getAllUsersWithPosts = async (): Promise<IUser[]> => {
//   return await User.find().select("-password").populate("posts");
// };

// export const updateUser = async (
//   id: string,
//   updateData: Partial<IUser>
// ): Promise<IUser | null> => {
//   return await User.findByIdAndUpdate(id, updateData, { new: true }).select(
//     "-password"
//   );
// };

// export const deleteToUser = async (id: string): Promise<IUser | null> => {
//   return await User.findByIdAndDelete(id);
// };