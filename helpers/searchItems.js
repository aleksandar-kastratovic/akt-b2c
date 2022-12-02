export const isLoadMore = (limit, items) => {
  if (items && items.length > 0) {
    return items.length > limit;
  }
  return false;
};

export const loadMoreItems = (limit, items) => {
  if (items && items.length > 0) {
    if (isLoadMore(limit, items)) {
      const moreItems = items.slice(0, limit);
      return moreItems;
    }
    return items;
  } else {
    return [];
  }
};

export const getLimitNumberOfItems = (limit, items) => items.slice(0, limit);
