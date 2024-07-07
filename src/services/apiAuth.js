import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // checking whether user was previously logged in by getting credentials from local storage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // YOU may think why shouldn't we get the data from the local storage and check if it is authenticated or not;
  //bcz it is more secure to refetch thedata
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  // we need only user property
  return data?.user;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new error(error.message);
}

export async function signUp({ fullName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function updateUser({ fullName, password, avatar }) {
  // it will automatically know which user is currently logged in adn it will update user automatically

  let updateData;
  if (password) updateData = { password };
  if (fullName)
    updateData = {
      data: {
        fullName,
      },
    };
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  // we need only user property
  if (!avatar) return data;
  const avatarName = `avatar-${data.user.id}-${Math.random()}`;
  const avatarPath = `${supabaseUrl}/storage/v1/object/public/avatars/${avatarName}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(avatarName, avatar);

  if (storageError) {
    throw new Error("Avatar image couldn't be uploaded");
  }

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: avatarPath,
    },
  });
  if (error2) {
    throw new Error(error2.message);
  }
  console.log(updatedUser);
  return updatedUser;
}
