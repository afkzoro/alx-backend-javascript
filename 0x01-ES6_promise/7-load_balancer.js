/* eslint-disable */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]) /* Execcutes both promises in parallel */
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
}
