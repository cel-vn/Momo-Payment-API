exports.getHomePage = (req, res) => {
    res.sendFile('index.html', { root: 'public' });
  };
  