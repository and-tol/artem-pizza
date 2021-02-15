describe('disabled button becomes anabled', () => {
  // ? it makes sense?
  it('does input value to email and password', async () => {
    // ! Это мокать не имеет смысла
    // const setIsDisabled = jest.fn((email, password) => {
    //   if (email && password) {
    //     return false;
    //   }
    // });
    // const { getByLabelText } = render(
    //   <MemoryRouter>
    //     <LoginPage />
    //   </MemoryRouter>
    // );
    // const email = getByLabelText('Э-почта');
    // const password = getByLabelText('Пароль');
    // fireEvent.change(email, {
    //   target: { value: 'test@mail.com' },
    // });
    // fireEvent.change(getByLabelText('Пароль'), {
    //   target: { value: '123456' },
    // });
    // await (
    //   await waitFor(() => expect(setIsDisabled(email, password)))
    // ).toEqual(false);
  });
});
