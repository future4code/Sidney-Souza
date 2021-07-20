export const gotoLogin = (history) => {
    history.pushState("/login")
}

export const gotoSignUpPage = (history) => {
    history.pushState("/cadastro")
}

export const gotoFeedPostsPage = (history) => {
    history.pushState("/")
}

export const gotoPostPage = (history) => {
    history.pushState(`/post/${id}`)
}

