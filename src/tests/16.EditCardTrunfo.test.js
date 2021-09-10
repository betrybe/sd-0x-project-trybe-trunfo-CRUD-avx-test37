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
  userEvent.clear(attr1Input);
  userEvent.type(attr1Input, '90');
  userEvent.clear(attr2Input);
  userEvent.type(attr2Input, '60');
  userEvent.clear(attr3Input);
  userEvent.type(attr3Input, '30');
  userEvent.selectOptions(selectInput, "raro");
  userEvent.click(saveButton);
}

describe("16 - Faça o botão de Cancelar para o formulário de edição", () => {

  it("Será validado se o botão `Cancelar` é exibido na tela após clicar em `Editar`", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    expect(screen.getByTestId("cancel-button-edit")).toBeInTheDocument();
  });


  it("Será validado se ao clicar no botão `Cancelar` o formulário de edição é removido da tela", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));
    expect(screen.getByTestId("save-button-edit")).toBeInTheDocument();

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();
  });

  it("Será validado se ao clicar no botão `Cancelar` a carta selecionada é exibida na tela novamente sem alteração no nome", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    const nameInputEdit = screen.getByTestId(/name-input-edit/i);
    userEvent.clear(nameInputEdit);
    userEvent.type(nameInputEdit, "Novo nome");

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();

    expect(screen.getByText("Carta 1 - Grafite 0.5")).toBeInTheDocument();
    
    expect(screen.queryByText("Novo nome")).not.toBeInTheDocument();
  });

  it("Será validado se ao clicar no botão `Cancelar` a carta selecionada é exibida na tela novamente sem alteração na descrição", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    const descriptionInputEdit = screen.getByTestId(/description-input-edit/i);
    userEvent.clear(descriptionInputEdit);
    userEvent.type(descriptionInputEdit, "Lorem ipsum");

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();

    expect(screen.getByText("O grafite mais popular do Brasil. Ótimo para escrita e para desenho.")).toBeInTheDocument();
    
    expect(screen.queryByText("Lorem ipsum")).not.toBeInTheDocument();
  });

  it("Será validado se ao clicar no botão `Cancelar` a carta selecionada é exibida na tela novamente sem alteração na imagem", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    const imageInputEdit = screen.getByTestId(/image-input-edit/i);
    userEvent.clear(imageInputEdit);
    userEvent.type(imageInputEdit, "new-url");

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();
    const allCardImages = screen.getAllByTestId("image-card");

    // Carta de preview
    expect(allCardImages[0]).toHaveAttribute("src", "");

    // Primeira Carta
    expect(allCardImages[1]).toHaveAttribute("src", "url-to-image")

  });

  it("Será validado se ao clicar no botão `Cancelar` a carta selecionada é exibida na tela novamente sem alteração no atributo 1", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    const attr1InputEdit = screen.getByTestId(/attr1-input-edit/i);
    userEvent.clear(attr1InputEdit);
    userEvent.type(attr1InputEdit, "75");

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();

    expect(screen.getByText("90")).toBeInTheDocument();
    
    expect(screen.queryByText("77")).not.toBeInTheDocument();
  });

  it("Será validado se ao clicar no botão `Cancelar` a carta selecionada é exibida na tela novamente sem alteração no atributo 2", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    const attr2InputEdit = screen.getByTestId(/attr2-input-edit/i);
    userEvent.clear(attr2InputEdit);
    userEvent.type(attr2InputEdit, "76");

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();

    expect(screen.getByText("60")).toBeInTheDocument();
    
    expect(screen.queryByText("76")).not.toBeInTheDocument();
  });

  it("Será validado se ao clicar no botão `Cancelar` a carta selecionada é exibida na tela novamente sem alteração no atributo 3", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    const attr3InputEdit = screen.getByTestId(/attr3-input-edit/i);
    userEvent.clear(attr3InputEdit);
    userEvent.type(attr3InputEdit, "77");

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();

    expect(screen.getByText("30")).toBeInTheDocument();
    
    expect(screen.queryByText("77")).not.toBeInTheDocument();
  });

  it("Será validado se ao clicar no botão `Cancelar` a carta selecionada é exibida na tela novamente sem alteração na raridade", () => {
    render(<App />);

    addCard();

    userEvent.click(screen.getByTestId("edit-button"));

    const rareInputEdit = screen.getByTestId(/rare-input-edit/i);
    userEvent.selectOptions(rareInputEdit, "muito raro");

    userEvent.click(screen.getByTestId("cancel-button-edit"));
    
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();

    const allCardRareTexts = screen.getAllByTestId("rare-card");

    // Carta de preview
    expect(allCardRareTexts[0]).toHaveTextContent("normal");

    // Primeira Carta
    expect(allCardRareTexts[1]).toHaveTextContent("raro")
  });
});