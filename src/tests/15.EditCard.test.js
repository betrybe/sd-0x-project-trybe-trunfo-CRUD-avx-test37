import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';


function addCards(){
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
  userEvent.type(imageInput, 'url-to-image1');
  userEvent.clear(attr1Input);
  userEvent.type(attr1Input, '45');
  userEvent.clear(attr2Input);
  userEvent.type(attr2Input, '54');
  userEvent.clear(attr3Input);
  userEvent.type(attr3Input, '33');
  userEvent.selectOptions(selectInput, "normal");
  userEvent.click(saveButton);

  userEvent.type(nameInput, 'Carta 2 - Grafite 0.7');
  userEvent.type(descInput, 'Ideal para quem gosta de desenhar. Adiciona o efeito `bold` em textos.');
  userEvent.type(imageInput, 'url-to-image2');
  userEvent.clear(attr1Input);
  userEvent.type(attr1Input, '30');
  userEvent.clear(attr2Input);
  userEvent.type(attr2Input, '60');
  userEvent.clear(attr3Input);
  userEvent.type(attr3Input, '90');
  userEvent.selectOptions(selectInput, "muito raro");
  userEvent.click(saveButton);
}

describe("15 - Faça a edição dos campos da carta selecionada", () => {

  it("Será validado se o nome da carta é atualizado conforme o valor do formulário de edição", () => {
    render(<App />);
    addCards();

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const nameInputEdit = screen.getByTestId(/name-input-edit/i);
    userEvent.clear(nameInputEdit);
    userEvent.type(nameInputEdit, "Carta 1 - Grafite cinza");

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    userEvent.click(saveButtonEdit);

    expect(screen.queryByText("Carta 1 - Grafite 0.5"))
      .not.toBeInTheDocument();

    expect(screen.getByText("Carta 1 - Grafite cinza"))
      .toBeInTheDocument();

    expect(screen.getByText("Carta 2 - Grafite 0.7"))
      .toBeInTheDocument();
  });

  it("Será validado se a descrição da carta é atualizado conforme o valor do formulário de edição", () => {
    render(<App />);
    addCards();

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const descriptionInputEdit = screen.getByTestId(/description-input-edit/i);
    userEvent.clear(descriptionInputEdit);
    userEvent.type(descriptionInputEdit, "Lorem ipsum dolor sit amet");

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    userEvent.click(saveButtonEdit);

    expect(screen.queryByText("O grafite mais popular do Brasil. Ótimo para escrita e para desenho."))
      .not.toBeInTheDocument();

    expect(screen.getByText("Lorem ipsum dolor sit amet"))
      .toBeInTheDocument();

    expect(screen.getByText("Ideal para quem gosta de desenhar. Adiciona o efeito `bold` em textos."))
      .toBeInTheDocument();
  });

  it("Será validado se a imagem da carta é atualizado conforme o valor do formulário de edição", () => {
    render(<App />);
    addCards();

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const imageInputEdit = screen.getByTestId(/image-input-edit/i);
    userEvent.clear(imageInputEdit);
    userEvent.type(imageInputEdit, "new-url-to-image");

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    userEvent.click(saveButtonEdit);

    const allCardImages = screen.getAllByTestId("image-card");

    // Carta de preview
    expect(allCardImages[0]).toHaveAttribute("src", "");

    // Primeira Carta
    expect(allCardImages[1]).toHaveAttribute("src", "new-url-to-image")

   // Segunda Carta
   expect(allCardImages[2]).toHaveAttribute("src", "url-to-image2")

  });

  it("Será validado se o atributo 1 da carta é atualizado conforme o valor do formulário de edição", () => {
    render(<App />);
    addCards();

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const attr1InputEdit = screen.getByTestId(/attr1-input-edit/i);
    userEvent.clear(attr1InputEdit);
    userEvent.type(attr1InputEdit, "66");

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    userEvent.click(saveButtonEdit);

    expect(screen.queryByText("45"))
    .not.toBeInTheDocument();

    expect(screen.getByText("66"))
      .toBeInTheDocument();

    expect(screen.getByText("30"))
      .toBeInTheDocument();
  });

  it("Será validado se atributo 2 da carta é atualizado conforme o valor do formulário de edição", () => {
    render(<App />);
    addCards();

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const attr2InputEdit = screen.getByTestId(/attr2-input-edit/i);
    userEvent.clear(attr2InputEdit);
    userEvent.type(attr2InputEdit, "66");

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    userEvent.click(saveButtonEdit);

    expect(screen.queryByText("54"))
    .not.toBeInTheDocument();

    expect(screen.getByText("66"))
      .toBeInTheDocument();

    expect(screen.getByText("60"))
      .toBeInTheDocument();
  });

  it("Será validado se o atriburto 3 da carta é atualizado conforme o valor do formulário de edição", () => {
    render(<App />);
    addCards();

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const attr3InputEdit = screen.getByTestId(/attr3-input-edit/i);
    userEvent.clear(attr3InputEdit);
    userEvent.type(attr3InputEdit, "66");

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    userEvent.click(saveButtonEdit);

    expect(screen.queryByText("33"))
    .not.toBeInTheDocument();

    expect(screen.getByText("66"))
      .toBeInTheDocument();

    expect(screen.getByText("90"))
      .toBeInTheDocument();
  });

  it("Será validado se a raridade da carta é atualizado conforme o valor do formulário de edição", () => {
    render(<App />);
    addCards();

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const rareInputEdit = screen.getByTestId(/rare-input-edit/i);
    userEvent.selectOptions(rareInputEdit, "raro");

    const saveButtonEdit = screen.getByTestId("save-button-edit");
    userEvent.click(saveButtonEdit);

    const allCardRareTexts = screen.getAllByTestId("rare-card");

    // Carta de preview
    expect(allCardRareTexts[0]).toHaveTextContent("normal");

    // Primeira Carta
    expect(allCardRareTexts[1]).toHaveTextContent("raro")

   // Segunda Carta
   expect(allCardRareTexts[2]).toHaveTextContent("muito raro")
  });

});