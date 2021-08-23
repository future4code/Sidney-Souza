export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeedPostsPage = (history) => {
    history.push("/")
}

export const goToPostPage = (history, id) => {
     history.push(`/post/${id}`)
}

