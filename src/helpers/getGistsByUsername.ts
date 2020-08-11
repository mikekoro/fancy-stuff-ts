import axios from 'axios';
import config from './../config';
import GistIntreface from './../interfaces/GistIntreface';

interface Response<T> {
  data: Array<GistIntreface>
}

let Tuple: [null, Response<object>?];

export const getGistsByUsername = async (username: string): Promise<typeof Tuple> => {
  try {
    let response = await axios({
      method: "get",
      url: `${config.SERVER_URL}/users/${username}/gists`,
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
}