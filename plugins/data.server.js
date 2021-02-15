export default async ({ store }) => {
  await store.dispatch('getEvents');
  await store.dispatch('getFeatures');
  await store.dispatch('getHomeContent');
};
