import React, { FormEvent, useContext, useEffect } from 'react'

import Modal from 'react-modal';
import { TodosContext } from '../../context/todos';
import { UIContext } from '../../context/ui';
import { useForm } from '../../hooks/useForm';
import { Todo } from '../../interfaces';
import { customStyles } from '../../utils';


Modal.setAppElement('#root');

interface FormData {
  title: string;
}
const initialForm: FormData = {
  title: '',
}

export const TodoModal = () => {

  // hooks 
  const { isModalOpen, closeModal} = useContext(UIContext);
  const { editTodo, updateTodo, cleanEditTodo } = useContext(TodosContext);
  const { formValues, setFormValues, handleInputChange } = useForm( initialForm );
  const { title } = formValues;

  useEffect(() => {
    if( editTodo ){
      setFormValues( editTodo );
    } else {
      setFormValues( initialForm );
    }
  }, [ setFormValues, editTodo ]);

  // functions 
  const handleCloseModal = () => {
    closeModal();
    cleanEditTodo();
  }

  const handleEditSubmit = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newTodo: Todo;
    if( editTodo ){
      newTodo = {
        ...editTodo,
        title,
      }
      updateTodo( newTodo );
      handleCloseModal();
    }

  }

  return (
    <Modal
      isOpen={ isModalOpen }
      // onAfterOpen={afterOpenModal}
      onRequestClose={ handleCloseModal }
      style={ customStyles }
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
    >
      <h2> Edit Todo </h2>
      <form onSubmit={ handleEditSubmit }>
        <input 
          type="text" 
          className="form-control mb-3"
          placeholder="editing a todo ..."
          name="title"
          value={ title }
          onChange={ handleInputChange }
        />
        <button 
          type="submit"
          className="btn btn-info"
        >
          Save
        </button>
      </form>
    </Modal>
  )
}
