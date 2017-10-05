import axios from 'axios';

const get = ({ url, params = {} }) =>
  axios({
    method: 'get',
    url: url,
    params: params,
  });

const post = ({ url, data }) =>
  axios({
    method: 'post',
    url: url,
    data: data,
  });

const put = ({ url, data }) =>
  axios({
    method: 'put',
    url: url,
    data: data,
  });

const remove = ({ url }) =>
  axios({
    method: 'delete',
    url: url,
  });

const httpUtil = {
  get,
  post,
  put,
  delete: remove,
};

export default httpUtil;
