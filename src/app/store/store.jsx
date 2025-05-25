import { create } from 'zustand';

const useBasket = create((set, get) => ({
  data: [],
  addToBasket: (recData) => {
    set((state) => {
      if (state.data.find((item) => item.id === recData.id)) {
        return state;
      } else {
        return { data: [...state.data, { ...recData, count: 1, price: Number(recData.price.replace(/,/g, '')) || 0,
          newprice: Number(recData.newprice.replace(/,/g, '')) || 0, }] };
      }
    });
  },
  del: (id) => {
    if (confirm('Are you sure?')) {
      set((state) => ({
        data: state.data.filter((item) => item.id !== id),
      }));
    }
  },
  plus: (id) => {
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    }));
  },
  minus: (id) => {
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      ),
    }));
  },


  basketCount: () => {
    return get().data.reduce((acc, item) => acc + item.count, 0);
  },

}));

export default useBasket;
