(function () {
  var pageId = window.PAGE_ID;
  if (!pageId) return;

  fetch('handouts.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var handouts = data.handouts || [];
      var listEl = document.getElementById('handout-list');
      var sectionsEl = document.getElementById('handout-sections');
      var current = handouts.find(function (h) { return h.id === pageId; });
      if (!current) {
        sectionsEl.innerHTML = '<p class="error">Handout not found.</p>';
        return;
      }

      handouts.forEach(function (h) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = h.id === 'acne' ? 'index.html' : h.id + '.html';
        a.textContent = h.title;
        if (h.id === pageId) a.setAttribute('aria-current', 'page');
        li.appendChild(a);
        listEl.appendChild(li);
      });

      var section = document.createElement('section');
      section.id = current.id;
      section.className = 'handout-section';
      section.setAttribute('aria-labelledby', 'title-' + current.id);

      var title = document.createElement('h2');
      title.id = 'title-' + current.id;
      title.textContent = current.title;
      section.appendChild(title);

      if (current.description) {
        var desc = document.createElement('p');
        desc.className = 'handout-description';
        desc.textContent = current.description;
        section.appendChild(desc);
      }

      var content = document.createElement('div');
      content.className = 'handout-body';
      content.innerHTML = current.content;
      section.appendChild(content);

      sectionsEl.appendChild(section);
    })
    .catch(function (err) {
      document.getElementById('handout-sections').innerHTML =
        '<p class="error">Could not load handout. Please try again later.</p>';
    });
})();
