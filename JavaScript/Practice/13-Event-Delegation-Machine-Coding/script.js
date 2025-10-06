const comments = [{
    id: 1,
    title: '1. Hi, how are you doing?',
    replies: [{
        id: 2,
        title: '2. I am doing just fine',
        replies: [{
            id: 3,
            title: '3. I am doing great too'
        }]
    }]
},
{
    id: 4,
    title: '4. I am awesome',
    replies: [{
        id: 5,
        title: '5. I am doing great',
        replies: [{
            id: 6,
            title: '6. I am doing awesome'
        }]
    }]
},
{
    id: 7,
    title: '7. I am also doing great',
    replies: [{
        id: 8,
        title: '8. I am doing fine',
        replies: [{
            id: 9,
            title: '9. I am doing amazing'
        }]
    }]
}
];

const containerRef = document.querySelector('.container');

function createCommentCard(parentRef, id, title) {

    const commentCard = document.createElement('div');
    commentCard.id = id;
    commentCard.classList.add('comment');
    commentCard.innerHTML = `
        <div class="title">${title}</div>
            <button class="reply">Reply</button>
            <div class="new hide">
                <textarea placeholder="Enter your comment"></textarea>
                <button class="send">Send</button>
            </div>
    `

    parentRef.appendChild(commentCard);

    return commentCard;
}

function render() {

    containerRef.innerHTML = '';
    renderComments(comments, containerRef);
}

function renderComments(comments, parentRef) {

    comments?.forEach(comment => {
        const commentCard = createCommentCard(parentRef, comment.id, comment.title);

        if (comment.replies) {
            renderComments(comment.replies, commentCard);
        }
    })
}

containerRef.addEventListener('click', e => {
    if (e.target.classList.contains('reply')) {
        const commentRef = e.target.closest('.comment');
        const newRef = commentRef.querySelector('.new');
        newRef.style.display = 'block';
    }

    if (e.target.classList.contains('send')) {

        const commentRef = e.target.closest('.comment');
        const newReplyTitle = commentRef.querySelector('.new textarea').value;
        const parentId = commentRef.id;
        const newReplyId = Math.floor(Math.random() * 100);

        addNewReply(comments, parentId, newReplyId, newReplyTitle);
        render();
    }
})

function addNewReply(commentList, parentId, newReplyId, newReplyTitle) {

    commentList?.forEach(comment => {
        if (comment.id == parentId) {

            if (!comment.replies)
                comment.replies = [];

            comment.replies.unshift({ id: newReplyId, title: newReplyTitle });
            return;
        }
        addNewReply(comment.replies, parentId, newReplyId, newReplyTitle);
    })
}

render();