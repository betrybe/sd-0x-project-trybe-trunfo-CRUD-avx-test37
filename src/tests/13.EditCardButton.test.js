import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("13 - Crie o botão de edição de carta", () => {

  it("Será validado se o botão `Editar` é renderizado quando apenas uma carta é adicionada", () => {
    render(<App />);

    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Biotônico');
    userEvent.type(descInput, 'Um remédio poderoso que abre o apetite por um curto prazo de 40 anos');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    const editButton = screen.getByTestId("edit-button");
    expect(editButton).toBeInTheDocument();
  });


  it("Será validado se o botão `Editar` é renderizado de acordo com a quantidade de cartas adicionadas", () => {
    render(<App />);

    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    // Primeira Carta
    userEvent.type(nameInput, 'Carta 1 - Biotônico');
    userEvent.type(descInput, 'Um remédio poderoso que abre o apetite por um curto prazo de 40 anos');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    // Segunda Carta
    userEvent.type(nameInput, 'Carta 2 - Estátua da Liberdade');
    userEvent.type(descInput, 'Uma famosa estátua que já foi destruída inúmeras vezes em filmes apocalípticos');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    const editButtons = screen.getAllByTestId("edit-button");
    expect(editButtons).toHaveLength(2);
  });

  it("Será validado se o formulário de editar é exibido apenas para a carta em que o botão foi clicado", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    // Primeira Carta
    userEvent.type(nameInput, 'Carta 1 - Estátua da Liberdade');
    userEvent.type(descInput, 'Uma famosa estátua que já foi destruída inúmeras vezes em filmes apocalípticos');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    // Segunda Carta
    userEvent.type(nameInput, 'Carta 2 - Cristo Redentor');
    userEvent.type(descInput, 'Considerado uma das 7 maravilhas do mundo, ainda tenta abraçar o Rio de Janeiro');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    const editButtons = screen.getAllByTestId("edit-button");
    userEvent.click(editButtons[0]);

    const nameInputEdit = screen.getByTestId(/name-input-edit/i);
    expect(nameInputEdit).toBeInTheDocument();
    expect(nameInputEdit).toHaveValue("Carta 1 - Estátua da Liberdade");
  });

  it("Será validado se o botão `Salvar` é renderizado ao clicar em `Editar`", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    
    userEvent.type(nameInput, 'Carta 1 - MSN');
    userEvent.type(descInput, 'Falecida plataforma de mensagens que as pessoas ficavam entrando e saindo para anunciar gol do time do coração');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    const editButton = screen.getByTestId("edit-button");
    userEvent.click(editButton);

    const saveEditButton = screen.getByTestId("save-button-edit");
    expect(saveEditButton).toBeInTheDocument();
  });
});