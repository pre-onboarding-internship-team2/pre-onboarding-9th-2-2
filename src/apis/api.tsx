import axios from 'axios';

export const getProduct = async () => {
  try {
    return await axios.get(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T054321Z&X-Amz-Expires=86400&X-Amz-Signature=97ef73f7b7a9dfe6eaa97bb222f562a5e95d2bf1051b60072c1407d7c639b02e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
    );
  } catch (err: any) {
    throw new Error(err);
  }
};
