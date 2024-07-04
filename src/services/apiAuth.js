import supabase from "./supabase";
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  console.log("njdfaad");
  // checking whether user was previously logged in by getting credentials from local storage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // YOU may think why shouldn't we get the data from the local storage and check if it is authenticated or not;
  //bcz it is more secure to refetch thedata
  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  if (error) throw new Error("data");
  // we need only user property
  return data?.user;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new error(error.message);
}
