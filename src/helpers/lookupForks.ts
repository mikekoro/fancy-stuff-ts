import axios from 'axios';
import ForkIntreface from './../interfaces/ForkIntreface';

interface Response<T> {
  data: Array<ForkIntreface>
}

let Tuple: [null, Response<object>?];

export const lookupForks = async (forks_url: string, limit: number): Promise<typeof Tuple> => {
  try {
    let response = await axios({
      method: "get",
      url: forks_url,
    });

    if (limit) {
      // if limit is passed, filter accordingly
      const altered_response = {
        ...response,
        data: response.data.slice(Math.max(response.data.length - limit, 0)),
      };
      return [null, altered_response];
    }
    return [null, response];
  } catch (error) {
    return [error];
  }
}