<%@ params( email: String, portalURL: String, code: String ) %> Здравствуйте, ${email}! <br /> Чтобы сменить пароль, перейдите по следующей ссылке: <br /> <a href="${portalURL}?token=${code}">Сбросить пароль</a><br /><br /> С уважением,  