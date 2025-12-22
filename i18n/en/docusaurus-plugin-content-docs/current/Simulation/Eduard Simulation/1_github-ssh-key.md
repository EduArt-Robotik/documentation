---
id: github-ssh-key
title: Github SSH Key
sidebar_position: 1
---

# Github SSH Key

The Github SSH Key is necessary to execute commands like `git clone`. The following guide describes how to create an SSH key and add it to Github on Windows and Mac.

This guide assumes you already have an account on [Github](https://github.com). It is recommended for students to use your student email address to get better features for free (e.g., creating private repositories).

## Mac
Open Terminal and enter the following command. Use the email address from your Github account!

```
ssh-keygen -t ed25519 -C "email_address_from_github_account@example.com"
```

Copy the SSH key with the following command:
```
cat ~/.ssh/id_ed25519.pub
```

- Open [Github Settings](https://github.com/settings/keys)
- Click the green "New SSH Key" button in the top right
- Enter a title, e.g., "MacBook Key from User"
- Paste from clipboard (cmd + v)
- Save

## Windows
- Install [https://git-scm.com/](https://git-scm.com/)
- Open PowerShell and enter the following command. Use the email address from your Github account!

```
ssh-keygen -t ed25519 -C "email_address_from_github_account@example.com"
```

Copy the SSH key with the following command:
```
clip < C:/Users/YOUR_USERNAME/.ssh/id_ed25519.pub
```

OR

Copy the SSH key with the following command:
```
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

OR

In Windows Explorer, navigate to the file path `~/.ssh/id_ed25519.pub` and find the file in your user folder. Open the file in a text editor, copy the contents, and continue:

- Open [Github Settings](https://github.com/settings/keys)
- Click the green "New SSH Key" button in the top right
- Enter a title, e.g., "Windows PC from User"
- Paste from clipboard (ctrl + v)
- Save

# Troubleshooting
- Key is invalid: try a different copy command

The key should look something like this. If it doesn't, you'll get an Invalid error message.
```
ssh-ed25519 AAAA1234567890ßqwertzuiopüasdfghjklyxcvbnm
emailaddressfromgithub@example.com
```

If none of that works… [Maybe this helps](https://www.apple.com/mac/) or the [official Github guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
