from ..services import register_user
def make_runner(users):
    def runner(action):
        if action == register_user:
            user = action()
            if user is not None:
                users.append(user)
        else:
            action(users)
    return runner