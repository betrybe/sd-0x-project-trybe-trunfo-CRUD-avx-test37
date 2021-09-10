import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';


function addCard(){
  const nameInput = screen.getByTestId(/name-input/i);
  const descInput = screen.getByTestId(/description-input/i);
  const imageInput = screen.getByTestId(/image-input/i);
  const attr1Input = screen.getByTestId(/attr1-input/i);
  const attr2Input = screen.getByTestId(/attr2-input/i);
  const attr3Input = screen.getByTestId(/attr3-input/i);
  const selectInput = screen.getByTestId(/rare-input/i);
  const saveButton = screen.getByTestId("save-button");

  userEvent.type(nameInput, 'Carta 1 - Grafite 0.5');
  userEvent.type(descInput, 'O grafite mais popular do Brasil. Ótimo para escrita e para desenho.');
  userEvent.type(imageInput, 'url-to-image');
  userEvent.type(attr1Input, '90');
  userEvent.type(attr2Input, '90');
  userEvent.type(attr3Input, '30');
  userEvent.selectOptions(selectInput, "normal");
  userEvent.click(saveButton);
}

describe("14 - Faça a validação do botão de Salvar no formulário de edição", () => {

  it("Será validado se o botão `salvar` está habilitado quando o botão de `editar` é clicado", () => {
    render(<App />);
    
    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).not.toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo nome estiver vazio", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const nameInputEdit = screen.getByTestId(/name-input-edit/i);
    userEvent.clear(nameInputEdit);

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo imagem estiver vazio", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const imageInputEdit = screen.getByTestId(/image-input-edit/i);
    userEvent.clear(imageInputEdit);

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo do atributo 1 for maior que 90", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const attr1InputEdit = screen.getByTestId(/attr1-input-edit/i);
    userEvent.clear(attr1InputEdit);
    userEvent.type(attr1InputEdit, "91")

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo do atributo 1 menor que 0", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const attr1InputEdit = screen.getByTestId(/attr1-input-edit/i);
    userEvent.clear(attr1InputEdit);
    userEvent.type(attr1InputEdit, "-1")

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo do atributo 2 for maior que 90", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const attr2InputEdit = screen.getByTestId(/attr2-input-edit/i);
    userEvent.clear(attr2InputEdit);
    userEvent.type(attr2InputEdit, "91")

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo do atributo 2 menor que 0", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const attr2InputEdit = screen.getByTestId(/attr2-input-edit/i);
    userEvent.clear(attr2InputEdit);
    userEvent.type(attr2InputEdit, "-1")

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo do atributo 3 for maior que 90", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const attr3InputEdit = screen.getByTestId(/attr3-input-edit/i);
    userEvent.clear(attr3InputEdit);
    userEvent.type(attr3InputEdit, "90")

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo do atributo 3 menor que 0", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const attr3InputEdit = screen.getByTestId(/attr3-input-edit/i);
    userEvent.clear(attr3InputEdit);
    userEvent.type(attr3InputEdit, "-1")

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se a somatória dos campos de atributos for maios que 210.", () => {
    render(<App />);

    addCard();

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const attr1InputEdit = screen.getByTestId(/attr1-input-edit/i);
    userEvent.clear(attr1InputEdit);
    userEvent.type(attr1InputEdit, "90")

    const attr2InputEdit = screen.getByTestId(/attr2-input-edit/i);
    userEvent.clear(attr2InputEdit);
    userEvent.type(attr2InputEdit, "90")

    const attr3InputEdit = screen.getByTestId(/attr3-input-edit/i);
    userEvent.clear(attr3InputEdit);
    userEvent.type(attr3InputEdit, "31")

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    expect(saveButtonEdit).toBeDisabled();
  });
})