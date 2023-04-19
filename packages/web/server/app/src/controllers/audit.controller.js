import { Audit } from 'database'

const dbActions = {
    card: 'card',
    bank: 'bank',
    ussd: 'ussd',
    register: 'register',
    create: 'create',
    update: 'update',
    delete: 'delete',
    loginemails: 'loginemails',
    emailsent: 'emailsent',
    smssent: 'smssent',
    rubie: 'rubie',
    print: 'print',
}

const dbActionsStatus = {
    successful: true,
    failed: false,
}

/**
 *
 * @param {*} userId
 * @param {*} objectId
 * @param {*} action
 * @param {*} detail
 */
function newInfo(data) {
    Audit.create({
        userId: data.userId,
        amount: data.amount,
        referenceId: data.referenceId,
        detail: data.detail,
        type: data.type,
        status: data.status,
        userWalletId: data.userWalletId,
        userWalletHistoryId: data.userWalletHistoryId,
        cardId: data.cardId,
        bankId: data.bankId,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    })
}

/**
 *
 * @param {*} userId
 * @param {*} objectId
 * @param {*} action
 * @param {*} detail
 */
function info(userId, objectId, action, detail) {
    Audit.create({
        userId,
        objectId,
        action,
        detail,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    })
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query
    Audit.list({ limit, skip })
        .then((users) => res.json(users))
        .catch((e) => next(e))
}

export default { info, list, dbActions, newInfo, dbActionsStatus }