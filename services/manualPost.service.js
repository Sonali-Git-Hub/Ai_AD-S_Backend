import ManualPost from '../models/ManualPost.js';

export const createManualPost = async (postData) => {
  const post = new ManualPost(postData);
  return await post.save();
};

export const getManualPostById = async (id) => {
  return await ManualPost.findById(id);
};

export const updateManualPostById = async (id, updateData) => {
  return await ManualPost.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteManualPostById = async (id) => {
  return await ManualPost.findByIdAndDelete(id);
};
