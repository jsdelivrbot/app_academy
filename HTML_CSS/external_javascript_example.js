window.onload = function() {
  (function commentFormListener() {
    form = document.getElementById("comment-form");
    form.addEventListener("submit", placeComment);
  })();
};

var placeComment = function(event) {
  event.preventDefault();
  var commentElement = createComment(event);
  var commentSection = document.getElementById('comments');
  commentSection.insertBefore(commentElement, commentSection.childNodes[2]);
};

var createComment = function(event) {
  var name = document.createTextNode(getName(event));
  var comment = document.createTextNode(getComment(event));

  var nameHeader = document.createElement('h4');
  var commentParagraph = document.createElement('p');

  nameHeader.appendChild(name);
  commentParagraph.appendChild(comment);

  var commentElements = [nameHeader, commentParagraph];
  var commentElement = document.createElement('div');
  commentElements.forEach(function(el) {
    commentElement.appendChild(el);
  });
  commentElement.id = name.textContent + '_comment';
  commentElement.className = 'user_comment';

  return commentElement;
};

var getName = function(event) {
  return event.target.children.name.value;
};

var getComment = function(event) {
  return event.target.children.comment.value;
};
