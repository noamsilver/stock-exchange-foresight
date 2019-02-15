export default {
  search: async (search) => {
    const res = await fetch('http://int.v2x.foresightauto.com/stock-exchange-service/market/search', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchString: search
      }),
    });
    
    return await getResObj(res);
  },
  buy: async (symbol, quantity) => {
    const res = await fetch('http://int.v2x.foresightauto.com/stock-exchange-service/market/buy', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stockSymbol: symbol,
        stockQuantity: quantity,
      }),
    });
    
    return await getResObj(res);
  },
  sell: async (symbol) => {
    const res = await fetch('http://int.v2x.foresightauto.com/stock-exchange-service/market/sell', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stockSymbol: symbol,
      }),
    });
    
    return await getResObj(res);
  },
  portfolio: async () => {
    const res = await fetch('http://int.v2x.foresightauto.com/stock-exchange-service/portfolio', {
      method: 'GET',
      headers: {
        Accept: '*/*'
      }
    })

    return await getResObj(res);
  },
  market: async (stocks) => {
    const query = stocks.reduce((queryStr, stock, index) => (queryStr += (index > 0 ?'&' : '') + `symbol=${stock}`), '?');
    const res = await fetch(`http://int.v2x.foresightauto.com/stock-exchange-service/market${query}`, {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    });
    
    return await getResObj(res);
  },
  reset: async () => {
    const res = await fetch('http://int.v2x.foresightauto.com/stock-exchange-service/management', {
      method: 'DELETE',
      headers: {
        Accept: '*/*'
      }
    })

    return res.ok;
  },
};

const getResObj = async (res) => {
  if (res.status === 200) {
    return await res.json();
  } else if (res.status === 500) {
    return {
      err: await res.json(),
    }
  } else {
    return {
      err: {
        status: res.status,
        message: res.statusText,
        error: res.statusText,
      }
    }
  }
}