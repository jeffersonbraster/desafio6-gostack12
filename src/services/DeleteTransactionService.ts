import { getCustomRepository, TransactionRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // busca no banco de dados? retorna erro

    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Não foi encontrado transação para deletar');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
