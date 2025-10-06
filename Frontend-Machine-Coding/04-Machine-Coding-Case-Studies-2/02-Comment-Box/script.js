const container = document.querySelector('.container');

container.addEventListener('click', (e) => {

    const targetElem = e.target;
    if (targetElem.classList.contains("reply")) {
        createReplyInput(e);
    }
})

const createReplyInput = (e) => {

    const fragment = document.createDocumentFragment();

    const replyContainer = document.createElement('div');
    replyContainer.classList.add('comment-reply-container');

    const inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('placeholder', "Type your comment here...");

    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit"
    submitButton.classList.add('btn-submit');

    replyContainer.appendChild(inputBox);
    replyContainer.appendChild(submitButton);
    fragment.appendChild(replyContainer);

    submitButton.addEventListener('click', () => {
        createCommentContainer(e, inputBox.value);
    })

    e.target.parentNode.appendChild(fragment);
}

function createCommentContainer(e, text) {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment-container');

    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');

    const h3Ele = document.createElement('h3');
    h3Ele.classList.add('comment-text');
    h3Ele.textContent = text;

    const replyDiv = document.createElement('div');
    replyDiv.classList.add('reply');
    replyDiv.textContent = "Reply";

    commentCard.appendChild(h3Ele);
    commentCard.appendChild(replyDiv);
    commentContainer.appendChild(commentCard);
    e.target.parentNode.appendChild(commentContainer);
}