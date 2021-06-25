import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import GlobalStyle from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';

//Accessibility =>
Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />

      <Dashboard />

      <GlobalStyle />
    </TransactionsProvider>
  );
}