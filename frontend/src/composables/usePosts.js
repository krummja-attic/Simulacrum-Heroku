import router from '~pages';

export function usePosts () {
  const posts = [];

  for (const { path, children } of router) {
    if (path === '/blog') {
      for (const child of children) {
        console.log(child);
        if (child.meta && child.meta.ignore !== true) {
          posts.push(child.path);
        }
      }
    }
  }

  return posts;
}
